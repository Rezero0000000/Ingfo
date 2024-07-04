import {v4} from "uuid";

import manifest from "../public/manifest.json"; 

type Manifest = typeof manifest;

export function generateUUID() {
    return v4();
}

export function asset(path: keyof Manifest) { 
  return manifest[path];
}