# -*- coding: utf-8 -*-
"""
Created on Thu Apr 11 00:52:47 2024

@author: joewa
"""

'''
Skeleton model class. You will have to implement the classification and regression layers, along with the forward definition.
'''

import datasets
import cv2
import sys
import time
import evaluation
import torch
import numpy as np

from torchvision import models
import matplotlib.pyplot as plt
import torch.nn as nn
import torch.nn.functional as f
import torch.optim as optim
import torchvision.transforms as transforms
from torch.utils.data import Dataset, DataLoader, SubsetRandomSampler
import os
from PIL import Image


transformer = transforms.Compose([transforms.ToTensor(),
                                  transforms.Resize((224, 224)),
                                  transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])])


class RCNN(nn.Module):
    def __init__(self, num_classes=4):
        super(RCNN, self).__init__()

        # Pretrained backbone. You may experiment with other models: https://pytorch.org/vision/stable/models.html
        resnet = models.resnet50(pretrained=True)

        # Remove the last two layers of the pretrained network. (This may differ if not using ResNet)
        self.backbone = nn.Sequential(*list(resnet.children())[:-2])

        # TODO: Implement the fully connected layers for classification and regression.
        self.fc1 = nn.Linear(in_features=2048 * 7 * 7, out_features=num_classes + 1)
        self.fc2 = nn.Linear(in_features=2048 * 7 * 7, out_features=num_classes * 4)

        self.dropout1 = nn.Dropout(p=0.2)
        self.dropout2 = nn.Dropout(p=0.2)

        # Freeze backbone weights. 
        for param in self.backbone.parameters():
            param.requires_grad = False

    def forward(self, x):
        # TODO: Implement forward. Should return a (batch_size x num_classes) tensor for classification
        #           and a (batch_size x num_classes x 4) tensor for the bounding box regression.
        backbone_x = self.backbone(x)
        backbone_x = backbone_x.view(-1, 2048 * 7 * 7)

        classification = self.dropout1(backbone_x)
        classification = self.fc1(classification)

        regression = self.dropout1(backbone_x)
        regression = self.fc2(regression)

        return classification  # , regression


def RUN(model, data_loader, device, optimizer, loss_fn, data_size,
        train=False, validation=False, test=False):

    if train or validation:
        # Training or validation phase
        model.train(train)  # Set the model to training mode if training, else evaluation mode

        loss_sum = 0.0
        accuracy_sum = 0.0

        for i, item in enumerate(data_loader):
            candidate_image, candidate_region, ground_truth_regions, ground_truth_classes = item
            candidate_image = candidate_image.to(device)
            ground_truth_classes = ground_truth_classes.to(device)

            # Predict classes
            outputs = model(candidate_image)

            # Compute loss
            loss = loss_fn(outputs, ground_truth_classes)

            if train:
                # Backpropagate the loss only during training
                optimizer.zero_grad()
                loss.backward()
                optimizer.step()

            # Accumulate loss and accuracy
            loss_sum += loss.item()
            _, prediction = torch.max(outputs, 1)
            accuracy_sum += torch.sum(prediction == ground_truth_classes).item()

    elif test:
        # Testing phase
        model.eval()  # Set the model to evaluation mode
        loss_sum = 0.0
        correct = 0
        total = 0

        with torch.no_grad():
            for i, item in enumerate(data_loader):
                candidate_image, candidate_region, ground_truth_regions, ground_truth_classes = item
                candidate_image = candidate_image.to(device)
                ground_truth_classes = ground_truth_classes.to(device)

                # Predict classes
                outputs = model(candidate_image)

                # Compute loss
                loss = loss_fn(outputs, ground_truth_classes)

                # Accumulate loss
                loss_sum += loss.item()

                # Calculate accuracy
                _, prediction = torch.max(outputs, 1)
                correct += torch.sum(prediction == ground_truth_classes).item()
                total += ground_truth_classes.size(0)

        accuracy_sum = correct / total

    return accuracy_sum / data_size, loss_sum / data_size, optimizer




def collate_fn(batch):
    candidate_images, ground_truth_classes = [], []
    # print(f"batch: {batch}")
    for item in batch:
        i = 0
        for a in item:
            if i != 0:
                print(i)
                print(a.shape)
            i += 1
            # candidate_images = transforms(candidate_image[ground_truth_regions[0]:ground_truth_regions[2], ground_truth_regions[1]:ground_truth_regions[3], :])
            # ground_truth_classes.append(ground_truth_class)
    return torch.Tensor(candidate_images), torch.LongTensor(ground_truth_classes)


if __name__ == '__main__':
    _num_classes = 4  # 20
    
    
    if len(sys.argv) == 2:
        saved_model_path = 'saved_models/best_model.pth'
        device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        checkpoint = torch.load(saved_model_path, map_location=device)
        model = RCNN(num_classes=_num_classes)
        model.load_state_dict(checkpoint['state_dict'])
        model.to(device)
        model.eval()  # Set the model to evaluation mode
        
        # Define transformations for preprocessing the input image
        transform = transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
            ])

        image_path = sys.argv[1]

        # Load and preprocess the input image
        image = Image.open(image_path)
        image_tensor = transform(image).unsqueeze(0).to(device)  # Add a batch dimension and move to device
    
        # Pass the preprocessed image through the model
        with torch.no_grad():
            outputs = model(image_tensor)
    
        # Interpret the model's output
        predicted_class = torch.argmax(outputs, dim=1).item()
        print(f'Predicted class: {predicted_class}')
    
        # If you have a classification label mapping, you can use it to get the class name
        class_names = ['Class 0', 'Class 1', 'Class 2', 'Class 3']  # Example class names
        predicted_class_name = class_names[predicted_class]
        
        
        print(f'Predicted class name: {predicted_class_name}')
        
        
        """
        if(predicted_class_name == "Class 0"):
            print("yes")
        else:
            print("no")
        
        """
        exit(0)
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    device = 'cuda'

    data_train =  datasets.HW5Dataset(data_root='train_s', json_file='train_s.json', candidate_region_size=224)
    data_test = datasets.HW5DatasetTest(data_root='test_s', json_file='test_s.json', candidate_region_size=224)
    data_valid = datasets.HW5Dataset(data_root='valid_s', json_file='valid_s.json',candidate_region_size=224)



    
    num_epochs = 3
    mini_batch = 32

    # batches using dataloader
    train_dataloader = DataLoader(data_train, batch_size=mini_batch, shuffle=True)
    valid_dataloader = DataLoader(data_valid, batch_size=mini_batch, shuffle=True)
    test_dataloader = DataLoader(data_test, batch_size=1, shuffle=True)
    # test_dataloader = DataLoader(data_test, batch_size=1, shuffle=True, collate_fn=collate_fn)

    network = RCNN(num_classes=_num_classes).to(device)

    # Adam optimizer and loss function
    optimizer = optim.Adam(network.parameters(), lr=1e-3, weight_decay=1e-5)
    loss = nn.CrossEntropyLoss()
    # loss_regression = nn.MSELoss()

    # loss and accuracy container
    training_accuracy_list = []
    training_loss_list = []
    validation_accuracy_list = []
    validation_loss_list = []

    global_v_loss = 10.0
    global_v_acc = 0.0
    global_tr_loss = 10.0
    global_tr_acc = 0.0


    # ------------------------------------------------------------------------------------------------------------------
    print('batch size: %d\n' % mini_batch)
    print(' Epoch     Training accuracy        Training loss       Validation accuracy       Validation loss')

    for epoch in range(num_epochs):

        # training
        training_accuracy, training_loss, _ = RUN(network, data_loader=train_dataloader, device=device,
                                                  optimizer=optimizer, loss_fn=loss, data_size=data_train.__len__(),
                                                  train=True)
        training_accuracy_list.append(training_accuracy)
        training_loss_list.append(training_loss)

        # validation
        validation_accuracy, validation_loss, optimizer = RUN(network, data_loader=valid_dataloader, device=device,
                                                              optimizer=optimizer, loss_fn=loss,
                                                              data_size=data_valid.__len__(),
                                                              validation=True)
        validation_accuracy_list.append(validation_accuracy)
        validation_loss_list.append(validation_loss)
        
        
        
        # Define the directory path where you want to save the model
        save_dir = 'saved_models'
        
        # Create the directory if it doesn't exist
        os.makedirs(save_dir, exist_ok=True)

        # save the best model
        if validation_loss < global_v_loss and validation_accuracy > global_v_acc:
            checkpoint = {
                'state_dict': network.state_dict(),
                'optimizer': optimizer.state_dict()
            }
        save_path = os.path.join(save_dir, 'best_model.pth')
        torch.save(checkpoint, save_path)
        global_v_loss = validation_loss
        global_v_acc = validation_accuracy
        global_tr_loss = training_loss
        global_tr_acc = training_accuracy
            # print status
        print(f'({epoch + 1:02d}/{num_epochs})         {training_accuracy:.4f}                 {training_loss:.4f}  \
                {validation_accuracy:.4f}                  {validation_loss:.4f}')

    # load best model
    checkpoint = torch.load('checkpoint.pth')
    network.load_state_dict(checkpoint['state_dict'])
    for parameter in network.parameters():
        parameter.requires_grad = False

    # perform test
    '''
    test_accuracy, _, _ = RUN(network, data_loader=test_dataloader, device=device,
                              optimizer=optimizer, loss_fn=loss, data_size=data_test.__len__(),
                              test=True)
    '''


    # graph plot
    epoch = [i for i in range(1, num_epochs + 1)]
    plt.figure(0)
    plt.plot(epoch, validation_loss_list, 'darkslateblue', label='Validation Loss')
    plt.plot(epoch, training_loss_list, 'deeppink', label='Training Loss')
    plt.xlabel('Epochs')
    plt.ylabel('Loss')
    plt.title('Training & Validation Loss')
    plt.legend()
    plt.savefig('loss_4.png')

    epoch = [i for i in range(1, num_epochs + 1)]
    plt.figure(1)
    plt.plot(epoch, validation_accuracy_list, 'darkslateblue', label='Validation Accuracy')
    plt.plot(epoch, training_accuracy_list, 'deeppink', label='Training Accuracy')
    plt.xlabel('Epochs')
    plt.ylabel('Accuracy')
    plt.title('Training & Validation Accuracy')
    plt.legend()
    plt.savefig('acc_4.png')

    sys.exit()