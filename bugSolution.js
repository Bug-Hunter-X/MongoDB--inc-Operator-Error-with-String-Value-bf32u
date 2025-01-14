```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("650e7875674d564444444444")}, {$inc: {counter: 1}});
```