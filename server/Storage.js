/* eslint-disable */
export default class Storage {
  constructor() {
    // The constructor should have no params
  }

  getTempUploadPath() {
    // Returns a local path for storing uploads temporarily
  }

  async upload(local, name) {
    // Moves a local file to the backend
    // If successful, the temporary file is removed
    // Returns an identifier of the file on the backend (e.g. a gs:// URL)
  }

  async getLink(id) {
    // Returns a temporary URL to the file
  }

  async deleteFile(id) {
    // Deletes a file from the backend
  }
}
