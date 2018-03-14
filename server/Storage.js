/* eslint-disable */
/*
 * Storage
 *
 * A storage backend can provide instructions for
 * FileClient to upload a file, and generate direct URLs
 * for read access. It should implement the following
 * async methods:
 *
 *  * localUpload(file, path):   Moves a file from the temporary
 *                               directory to the local storage.
 *                               Returns an identifier.
 *
 *                               Non-local storage backends must
 *                               NOT override this method.
 *
 *  * localDownload(file, ctx):  Serves a file locally.
 *
 *                               Non-local storage backends must
 *                               NOT override this method.
 *
 *  * requestUpload(file):       Returns instructions to upload
 *                               to a file slot.
 *
 *  * getLink(file):             Returns a URL to download from
 *                               a file slot. It should have some
 *                               kind of access control (Passport,
 *                               S3 signed URL, etc).
 *
 *                               To initiate a local download, return
 *                               true.
 *
 *  * deleteFile(file):          Deletes a file from the storage
 *                               backend.
*/
export default class Storage {
  constructor() {
    // The constructor should have no params
  }

  async localUpload(file, lpath) {
    throw Error('Not supported by the backend');
  }

  async localDownload(file, ctx) {
    throw Error('Not supported by the backend');
  }

  async requestUpload(file) {
    return {
      action: 'localUpload',
      id: file._id,
    };
  }

  async getLink(file) {
    return true;
  }

  async deleteFile(file) {
  }
}
