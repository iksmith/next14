/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rmtk3vkk6v428mh");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "rmtk3vkk6v428mh",
    "created": "2024-05-27 23:35:39.358Z",
    "updated": "2024-05-27 23:35:39.358Z",
    "name": "Art",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "li1skqiy",
        "name": "field",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
