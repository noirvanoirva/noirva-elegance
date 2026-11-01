# Firebase store sync

The storefront reads its live settings, products, and product photos from Cloud Firestore. The public Firebase web configuration in `firebase-config.js` is not a secret; access is controlled by `firestore.rules`.

## One-time setup

1. Enable Google sign-in in Firebase Authentication and add `noirvanoirva.github.io` to the authorised domains.
2. Publish the rules from `firestore.rules` to the `(default)` Cloud Firestore database.
3. Open the deployed site at `https://noirvanoirva.github.io/noirva-elegance/#admin` and sign in with the owner Google account.
4. Copy the UID shown in the admin panel. In Firestore, create a document at `admins/{UID}` with the boolean field `enabled` set to `true`. Admin documents cannot be created or changed by the website.
5. Return to the admin panel and choose **Publier la boutique** once. This uploads the store data and its current photos.

After the first publication, admin edits are written to Firestore and appear on the public site. The `storefront/public` document contains text and photo references; each compressed photo is stored separately in `media/{sha256}` to stay below Firestore's document-size limit. Images larger than 700 KiB after resizing are rejected.

Firebase Storage is intentionally not used. Existing product videos remain static GitHub Pages files. New videos must be published with the site files; uploading a video from the admin panel is intentionally unavailable because a browser-only video upload would not sync to other visitors.
