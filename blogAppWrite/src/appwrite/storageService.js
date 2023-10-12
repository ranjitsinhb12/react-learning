import config from '../config/config.js'
import {Client, ID, Storage} from 'appwrite'

export class storageService{
    client = new Client()
    storage;

    constructor(){
        this.client
            setEndpoint(config.appWriteUrl) // Your API Endpoint
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

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                config.appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service:: deleteFile:: error:: ", error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            config.appWriteBucketId,
            fileId
        )
    }

}

const databaseService = new DatabaseService()

export default databaseService