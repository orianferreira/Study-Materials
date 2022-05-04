//
//  ViewController.swift
//  FileIO
//
//  Created by Lucas Longo on 12/17/18.
//  Copyright © 2018 Lucas Longo. All rights reserved.
//

import Cocoa

class ViewController: NSViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        
    }
    
    @IBAction func chooseFileExport(_ sender: Any) {
        let panel = NSOpenPanel();
        panel.allowsMultipleSelection = true
        panel.begin { (response) in
            if response == NSApplication.ModalResponse.OK {
                let urls = panel.urls
                
                for url in urls {
                    do {
                        var contents = try String.init(contentsOf: url)
                        
                        contents = contents.replacingOccurrences(of: "\n", with: " ")
                        contents = contents.replacingOccurrences(of: "[", with: "\n")
                        contents = contents.replacingOccurrences(of: "]", with: "\n")
                        contents = contents.replacingOccurrences(of: "\n ", with: "\n")
                        contents = contents.replacingOccurrences(of: "  ", with: " ")
                        contents = contents.replacingOccurrences(of: "  ", with: " ")

                        let workingString = contents.split(separator: "\n")
                        var finalString = ""
                        
                        for line in workingString {
                            let first = line.first
                            if first != "{" && first != "0" {
                                let c = String(first!)
                                if c == c.lowercased() {
                                    finalString += " "
                                } else {
                                    finalString += "\n\n"
                                }
                                finalString += line
                            }
                        }
                        
                        do {
                            let fileName = url.lastPathComponent
                            let path = NSHomeDirectory().appending("/Downloads/\(fileName)")
                            let writeUrl = URL(fileURLWithPath: path)
                            print(writeUrl.absoluteString)
                            try finalString.write(to: writeUrl, atomically: true, encoding: .utf8)
                            
                            let directory = writeUrl.deletingLastPathComponent()
                            
                            NSWorkspace.shared.selectFile(nil, inFileViewerRootedAtPath: directory.absoluteString)
                            NSWorkspace.shared.selectFile(nil, inFileViewerRootedAtPath: path)
                            
                        } catch {
                            print(error)
                            print("erro write")
                        }
                    } catch {
                        print("erro read")
                    }
                }
            }   
        }
    }
    

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }


}

