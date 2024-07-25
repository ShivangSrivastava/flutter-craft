import fs from "fs";
import path from "path";
import * as vscode from "vscode";
import folderStructure from "../constants/folder-structure";
import initOptions from "../constants/initOptions";
import { getRootPath } from "../utils/helper";

const ROOT: string = getRootPath() ?? "/";
const JSON_PATH = path.join(ROOT, ".vscode", "flutter-craft.json");

const addToGitIgnore = () => {
  fs.appendFile(path.join(ROOT, ".gitignore"), ".vscode\n", (err) => {
    if (err) {
      vscode.window.showErrorMessage(err.message);
    }
  });
};

const createDefaultJson = () => {
  if (!fs.existsSync(path.join(ROOT, ".vscode"))) {
    addToGitIgnore();
    fs.mkdirSync(path.join(ROOT, ".vscode"), { recursive: true });
  }
  fs.writeFile(JSON_PATH, JSON.stringify({}), (err) => {
    if (err) {
      vscode.window.showErrorMessage(err.message);
    }
  });
};

const quickPick = () => {
  // Prompt for architectural pattern
  vscode.window
    .showQuickPick(initOptions, {
      placeHolder: "Select architectural pattern",
    })
    .then((architecturePattern) => {
      if (!architecturePattern) {
        return;
      }

      // Generate JSON configuration file based on user selections
      const config = {
        _comment:
          "Use <fl> as a placeholder for the feature/layer name. When generating, it will be automatically replaced with the name you enter.",
        architecturePattern: architecturePattern.label,
        path: path.join(ROOT, "lib"),
        structure:
          architecturePattern.label === "Clean Architecture"
            ? folderStructure.clean
            : architecturePattern.label === "MVVM"
            ? folderStructure.mvvm
            : architecturePattern.label === "MVC"
            ? folderStructure.mvc
            : folderStructure.custom,
      };
      fs.writeFile(JSON_PATH, JSON.stringify(config), (err) => {
        if (err) {
          vscode.window.showErrorMessage(err.message);
        } else {
          vscode.window.showInformationMessage(
            "Configuration file created successfully"
          );
        }
      });
    });
};

export const initCommand = () => {
  quickPick();
  createDefaultJson();
};
