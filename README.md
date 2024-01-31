# README

## Installation Steps for Dagger Pipeline

### Install Docker

The pipeline will be executed in a container, so Docker is required. Docker can be downloaded from the official [Docker website](https://www.docker.com/).

### Install the Dagger CLI

#### For Windows:
1. Open PowerShell.
2. Run the following command:
   ```powershell
   Invoke-WebRequest -UseBasicParsing -Uri https://dl.dagger.io/dagger/install.ps1 | Invoke-Expression
   ```

For installation guides on other operating systems, please refer to the [Dagger CLI documentation](https://docs.dagger.io/cli/465058/install/).

After installation, verify if Dagger is correctly installed:
1. Open Command Prompt.
2. Run the following command:
   ```cmd
   where dagger
   ```
   You should see a path similar to `C:\<your home folder>\dagger\dagger.exe`.

### Install the Dagger SDK for Python

You can install the Dagger Python SDK either via pip or Conda.

- Using pip:
  ```cmd
  pip install dagger-io
  ```
- Using Conda:
  ```cmd
  conda install dagger-io
  ```

---

Feel free to modify this template according to your repository's specific needs!
