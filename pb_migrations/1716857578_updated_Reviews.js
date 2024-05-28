/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xsyqswe1",
    "name": "content",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1jfdcnoh",
    "name": "createdBy",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wols2jih",
    "name": "rating",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aeqm1dwd",
    "name": "title",
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

  // remove
  collection.schema.removeField("sueiv4le")

  // remove
  collection.schema.removeField("xsyqswe1")

  // remove
  collection.schema.removeField("1jfdcnoh")

  // remove
  collection.schema.removeField("wols2jih")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
