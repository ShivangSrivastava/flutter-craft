# Flutter Craft VSCode Extension

## Overview

The Flutter Craft extension for Visual Studio Code enhances your development workflow by providing tools for generating and managing project architecture configurations effortlessly.

## Features

- **Initialization Command**

  - The `initCommand` function initializes the project configuration by creating a `.vscode/flutter-craft.json` file based on selected architectural patterns.

- **Generate Command**
  - The `generateCommand` function facilitates the creation of feature or layer directories within your project structure, tailored to the configuration defined in `.vscode/flutter-craft.json`.

## Commands

- **Init Command**

  - Executes the `quickPick` function to prompt for an architectural pattern choice. Based on the selected pattern, a JSON configuration file (`flutter-craft.json`) is generated in `.vscode`, defining project structure details.

- **Generate Command**
  - Reads the `flutter-craft.json` configuration file to obtain project structure preferences. It then prompts the user to enter a feature or layer name (`<fl>`), and generates corresponding directories based on the defined structure.

## Usage

1. **Initialization**

   - Use the `Init Command` to set up your project's architecture preferences:
     - Launch Visual Studio Code.
     - Open your Flutter project.
     - Execute the `Init Command`.
     - Choose an architectural pattern from the quick pick menu.
     - Confirm your selection to create the `.vscode/flutter-craft.json` configuration file.

2. **Generating Features/Layers**
   - Once initialized, utilize the `Generate Command` to add new features or layers:
     - Run the `Generate Command`.
     - Enter the name of the feature or layer using `<fl>` as a placeholder.
     - Directories are automatically created according to the project structure defined in `.vscode/flutter-craft.json`.

## Configuration

The `flutter-craft.json` configuration file defines:

- **Architecture Pattern**
- **Base Path**
- **Directory Structure**

Modify this file directly in `.vscode` to adapt the extension to your project's specific needs.

## Requirements

Ensure your Flutter project is set up correctly with a valid root path accessible to Visual Studio Code.

## Screenshots

- Open Command Palette
  ![Open Command Palette](<assets/Screenshot (1).png>)
- Run init command
  ![Run init command](<assets/Screenshot (2).png>)
- Select Architecture Pattern
  ![Select Architecture Pattern](<assets/Screenshot (3).png>)
- Run generate command
  ![Run generate command](<assets/Screenshot (4).png>)
- Enter feature/layer name(fl)
  ![Enter feature/layer name(fl)](<assets/Screenshot (5).png>)
  ![Enter feature/layer name(fl)](<assets/Screenshot (5).png>)

## To-Do

- Implement JSON configuration for folder structure and settings.
- Support multiple architectures.
- Refactor and extract widgets into separate files.

## Contribution

Contributions to FlutterCraft are welcome!
For any issues or suggestions, please [open an issue on GitHub](https://github.com/ShivangSrivastava/flutter-craft/issues).

<!-- update: npx vsce package -->
<!-- extension install -->
