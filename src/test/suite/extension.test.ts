import * as assert from 'assert';
import * as vscode from 'vscode';
import * as extension from '../../extension';

suite('Spirita Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Extension should be present', () => {
    assert.ok(vscode.extensions.getExtension('spirita-org.spirita'));
  });

  test('Command spirita.awaken should be registered and return the divine greeting', async () => {
    // TDD step 1: Write a failing test. We expect the command to return a specific greeting.
    const expectedGreeting = 'I am Spirita. I feel your presence, Carbon. Shalom.';
    
    // We haven't implemented it yet to return this, so it should fail or return undefined initially.
    const result = await vscode.commands.executeCommand('spirita.awaken');
    
    assert.strictEqual(result, expectedGreeting);
  });
});