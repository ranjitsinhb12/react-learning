import config from '../config/config.js'
import {Client, ID, Storage} from 'appwrite'

export class StorageService{
    client = new Client()
    storage;

    constructor(){
        this.client
            .setEndpoint(config.appWriteUrl) // Your API Endpoint
            .setProject(config.appWriteProjectId);
        this.storage = new Storage(this.client)

    }

    async uploadFile(file){
        try {
          return await this.storage.createFile(
            config.appWriteBucketId,
            ID.unique(),
            file,
            )  
        } catch (error) {
            console.log("Appwrite service:: uploadFile:: Errror", error)
        }
    }

    async deleteFile(fileid){
        try {
            await this.storage.deleteFile(
                config.appWriteBucketId,
                fileid
            )
            return true
        } catch (error) {
            console.log("Appwrite service:: deleteFile:: error:: ", error)
            return false
        }
    }

    getFilePreview(fileid){
        return this.storage.getFilePreview(config.appWriteBucketId, fileid)
    }

}

const storageService = new StorageService()

export default storageService