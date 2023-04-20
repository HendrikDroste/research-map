import clientPromise from '../../../lib/mongodb'

export default async (req, res) => {
  try {
    // await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //.find({})
    //.project({ cfTitle: 1 })
    const client = await clientPromise
    const db = client.db('FLK_Web')

    const searchrec = await db
      .collection('publications')
      .aggregate([{ $sample: { size: 4 } }])
      .project({ _id: 0, cfTitle: 1 })
      .toArray()

    res.json(searchrec)
  } catch (e) {
    console.error(e)
  }
}
