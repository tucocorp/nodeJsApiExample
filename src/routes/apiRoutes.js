import { addNewContact, getContacts, getContact, updateContact, deleteContact } from '../controllers/apiController';

const routes = (app) => {
  app.route('/contact')
     .get((req, res, next) => {
       //middelware
       console.log(`Request from: ${req.originalUrl}`);
       console.log(`Request type: ${req.method}`);
       next();
    }, getContacts)

     .post(addNewContact);

  app.route('/contact/:contactID')
      // Getting a speficic contact
     .get(getContact)
      // Updating a speficic contact
     .put(updateContact)
      // Deleting a speficic contact
     .delete(deleteContact)
}

export default routes;
