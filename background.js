// background.js
// Відповідає на запити з content.js, повертає номер вкладки
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "getTabNumber" && sender.tab) {
    const tabId = sender.tab.id;
    const groupId = sender.tab.groupId;
    const windowId = sender.tab.windowId;
    chrome.tabs.query({windowId}, (tabs) => {
      let filteredTabs;
      if (groupId && groupId !== -1) {
        // Вкладка у групі: рахуємо позицію серед вкладок цієї групи
        filteredTabs = tabs.filter(t => t.groupId === groupId);
      } else {
        // Вкладка не у групі: рахуємо позицію серед не-групових вкладок
        filteredTabs = tabs.filter(t => !t.groupId || t.groupId === -1);
      }
      // Відсортувати за tab.index
      filteredTabs.sort((a, b) => a.index - b.index);
      // Знайти позицію поточної вкладки
      const idx = filteredTabs.findIndex(t => t.id === tabId);
      sendResponse({tabNumber: idx !== -1 ? idx + 1 : sender.tab.index + 1});
    });
    return true; // async response
  }
  return true;
});
