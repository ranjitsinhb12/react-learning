import config from '../config/config.js'
import {Client, ID, Databases, Storage, Query} from 'appwrite'

export class DatabaseService{
    client = new Client()
    databases;

    constructor(){
        this.client
            setEndpoint(config.appWriteUrl) // Your API Endpoint
            .setProject(config.appWriteProjectId);
        this.databases = new Databases(this.client)

    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(config.appWriteDatabaseId, config.appWriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
                userId
            })
        } catch (error) {
            console.log("Appwrite:: Services:: createPost:: error", error)
        }
    }

    async updatePost(slug ,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(config.appWriteDatabaseId, config.appWriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status
            })
        } catch (error) {
            console.log("Appwrite:: service:: updatePost:: error::", error)
        }
    
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(config.appWriteDatabaseId, config.appWriteCollectionId, slug)
            return true
        } catch (error) {
            console.log("Appwrite service:: deletePost:: Error:: ", error)
            return false
        }
    }

    async getPost(slug){
        try {
          return await this.databases.getDocument(
            config.appWriteDatabaseId,
            config.appWriteCollectionId,
            slug
           ) 
        } catch (error) {
            console.log("Appwrite service: getPost:: Error:: ", error)
            return false
        }
    }

    async getPosts(quries = [Query.equal("status", "Active")]){
        try {
            return await this.databases.listDocuments(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                quries,
            )
        } catch (error) {
            console.log("Appwrite services:: getPosts:: error::", error)
            return false
        }
    }

    
}

const databaseService = new DatabaseService()

export default databaseService