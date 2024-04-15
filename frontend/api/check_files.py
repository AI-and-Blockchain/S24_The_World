import os
import time
import subprocess
sleep_time = 5


def process_file(file_path) -> bool:
    pass


def upload_to_ipfs(file_path) -> str:
    # Use subprocess to run the ipfs command
    # Get the output of the command
    output = subprocess.run(['ipfs', 'add', file_path], capture_output=True)
    # Get the output string
    output_str = output.stdout.decode('utf-8')
    # Split the string by spaces
    ipfs_code = output_str.split(' ')[1]
    return ipfs_code


def main(path):
    while True:
        files = os.listdir(path)
        for file in files:
            if file.endswith('.jpg') or file.endswith('.png'):
                file_passed = process_file(os.path.join(path, file))
                # file_passed = True
                if file_passed:
                    print(f"File {file} passed")
                    os.rename(os.path.join(path, file),
                              os.path.join('display', file))
                    ipfs_code = upload_to_ipfs(os.path.join('display', file))
                    print(f"IPFS link: ipfs.io/ipfs/{ipfs_code}")

                else:
                    print(f"File {file} failed")
                    os.remove(os.path.join(path, file))

        time.sleep(sleep_time)

    pass


if __name__ == "__main__":
    path = os.path.join(os.getcwd(), 'uploads')
    main(path)