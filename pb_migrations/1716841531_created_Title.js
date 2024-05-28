/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "p2vlivxwb50tseg",
    "created": "2024-05-27 20:25:31.979Z",
    "updated": "2024-05-27 20:25:31.979Z",
    "name": "Title",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yabbytlc",
        "name": "Title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("p2vlivxwb50tseg");

  return dao.deleteCollection(collection);
})
