/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdx8d8kblh16rcd")

  // remove
  collection.schema.removeField("sueiv4le")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ufoaiis9",
    "name": "Art",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdx8d8kblh16rcd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sueiv4le",
    "name": "art",
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
  }))

  // remove
  collection.schema.removeField("ufoaiis9")

  return dao.saveCollection(collection)
})
