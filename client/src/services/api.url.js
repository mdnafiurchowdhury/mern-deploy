export const API_URLS = {
  saveSentEmails: {
      endpoint: 'save',
      method: 'POST'
  },
  saveDraftEmails: {
      endpoint: 'save-draft',
      method: 'POST'
  },
  getEmailFromType: {
      endpoint: 'emailsi',
      method: 'GET' 
  },
  toggleStarredMails: {
      endpoint: 'starred',
      method: 'POST'
  },
  deleteEmails: {
      endpoint: 'delete',
      method: 'DELETE'
  },
  moveEmailsToBin: {
      endpoint: 'bin',
      method: 'POST'
  }
}