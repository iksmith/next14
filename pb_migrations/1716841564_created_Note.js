/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wdx8d8kblh16rcd",
    "created": "2024-05-27 20:26:04.832Z",
    "updated": "2024-05-27 20:26:04.832Z",
    "name": "Note",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aeqm1dwd",
        "name": "Text",
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
  const collection = dao.findCollectionByNameOrId("wdx8d8kblh16rcd");

  return dao.deleteCollection(collection);
})
