```javascript
// Incorrect usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id": ObjectId("650e7875674d564444444444")}, {$inc: {counter: '1'}});
```