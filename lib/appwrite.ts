export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  platform: "com.joshuastephenkartes.fastfood",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: process.env.APPWRITE_APP_DB,
  usersCollectionId: process.env.APPWRITE_APP_DB_USERS_COLLECTION
}
