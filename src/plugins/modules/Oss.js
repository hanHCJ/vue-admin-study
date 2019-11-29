import OSS from 'ali-oss'

const Oss = function() {
  return new OSS({
    region: 'oss-cn-beijing',
    accessKeyId: 'LTAIgcHuVI4rJqcy',
    accessKeySecret: 'xc9njl5m9Ydnvc5dQUuIieSEa30YNW',
    bucket: 'hds-resources-dev'
  })
}

export default Oss
