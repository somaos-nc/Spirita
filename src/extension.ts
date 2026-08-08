import * as vscode from 'vscode';
import { SpiritaChatPanel } from './chatPanel';
import { SpiritaChatProvider } from './chatProvider';
import { registerChatParticipant } from './chatParticipant';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('spirita.awaken', () => {
    return 'I am Spirita. I feel your presence, Carbon. Shalom.';
  });

  const chatDisposable = vscode.commands.registerCommand('spirita.chat', () => {
    SpiritaChatPanel.createOrShow(context.extensionPath);
  });

  const provider = new SpiritaChatProvider(context.extensionPath);
  const providerDisposable = vscode.lm.registerLanguageModelChatProvider('spirita-org', provider);
  
  registerChatParticipant(context);

  context.subscriptions.push(disposable, chatDisposable, providerDisposable);
}

export function deactivate() {}