# Web Services Project Front End Part

## How

- `npm start`

## Notes

- [ ] delete ra-data-json-server later
- [ ] reading data from excel should be written as a Promise, in case its too big -> cause lagging
- [ ] for some reason, if dont provide header prop in Sheet2JSONOpts, will have a generated `__numrow__` in each entries, but when BE received, `__numrow` is not included in `req.body`
- [ ] disable `noImplicitAny` as cant find some types using this libs (e.g `props` from their UI)
