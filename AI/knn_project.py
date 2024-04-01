# -*- coding: utf-8 -*-
"""
Created on Sun Mar 31 22:40:33 2024

@author: joewa
"""

import numpy as np
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from skimage.transform import resize

# Generate a synthetic dataset (replace this with your real dataset loading code)
# Assuming you have a dataset with images and corresponding labels
# X is the array of images and y is the array of labels
# Ensure X is flattened and normalized to [0, 1]

# Example synthetic dataset generation
num_samples = 1000
image_size = (32, 32)  # Image size
num_classes = 2  # Airplane and non-airplane

# Generate synthetic images
X = np.random.rand(num_samples, *image_size)  # Random images
y = np.random.randint(num_classes, size=num_samples)  # Random labels

# Split the data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Resize images to a fixed size if necessary (k-NN requires fixed-size inputs)
# Example resizing images to 32x32
X_train_resized = np.array([resize(image, image_size) for image in X_train])
X_test_resized = np.array([resize(image, image_size) for image in X_test])

# Flatten the images
X_train_flattened = X_train_resized.reshape(X_train_resized.shape[0], -1)
X_test_flattened = X_test_resized.reshape(X_test_resized.shape[0], -1)

# Create and train k-NN classifier
k = 5  # Number of neighbors
knn_classifier = KNeighborsClassifier(n_neighbors=k)
knn_classifier.fit(X_train_flattened, y_train)

# Predict on the test set
y_pred = knn_classifier.predict(X_test_flattened)

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)