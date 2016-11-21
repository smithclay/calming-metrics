## calming-metrics

Example React.js frontend for Infrastructure metrics fetched using New Relic Insights.

### Requirements

* [Create React App](https://github.com/facebookincubator/create-react-app).
* AWS Account

### Development

To run in development mode, available at http://localhost:3000/

```
  npm start
```

### Production Build

Artificats will be placed in the `./build` directory.

```
  npm run build
```

### Uploading to S3

Edit `s3-sync.sh` to modify the AWS region and bucket name.

```
  npm run deploy
```


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
