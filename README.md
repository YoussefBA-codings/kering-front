# Comment lancer l'application Next.js

1. Clonez le projet à partir du dépôt Git.
2. Installez les dépendances en utilisant la commande `npm install`.
3. Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```plaintext
NEXT_PUBLIC_API_URL=http://localhost:3333
NEXT_PUBLIC_NODE_ENV=development
```

4. Lancez l'application avec la commande `npm run dev`.
5. Accédez à l'application sur `http://localhost:3000`.

Assurez-vous de ne jamais inclure le fichier `.env.local` dans votre système de contrôle de version (comme Git) pour protéger vos informations sensibles. Bon développement !
