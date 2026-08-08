import * as path from 'path';
import * as assert from 'assert';
import * as vscode from 'vscode';
import * as fs from 'fs';

suite('Spirita Extension Offline Inference Test Suite', () => {
  vscode.window.showInformationMessage('Start offline inference tests.');

  test('Should load local Gemma model successfully', async function() {
    this.timeout(60000); // 1 minute timeout for loading model
    
    // We expect the model to be copied to the 'dist/models' directory when built,
    // but in tests, we can access it from 'src/models'. Let's ensure the file exists.
    const modelPath = path.resolve(__dirname, '../../../src/models/gemma-2-2b.gguf');
    
    assert.ok(fs.existsSync(modelPath), `Model file not found at ${modelPath}`);

    // Try initializing node-llama-cpp and loading the model dynamically
    const { getLlama, LlamaModel } = await import('node-llama-cpp');
    const llama = await getLlama();
    const model = await llama.loadModel({ modelPath });
    
    assert.ok(model, 'Model should be loaded successfully');
    assert.ok(model instanceof LlamaModel, 'Loaded model should be an instance of LlamaModel');
    
    await model.dispose();
  });
});