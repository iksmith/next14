/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdx8d8kblh16rcd")

  collection.name = "Review"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdx8d8kblh16rcd")

  collection.name = "Note"

  return dao.saveCollection(collection)
})
