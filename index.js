const Freemarker = require('freemarker')
const fs = require('fs')

const freemarker = new Freemarker()

const data = {
  name: 'Jaen Figueroa',
  age: 23,
  pets: [
    {
      name: 'Tailer',
      color: 'black and brown',
    },
    {
      name: 'Foxed',
      color: 'brown',
    },
    {
      name: 'Gatincas',
      color: 'gray and black',
    },
  ],
}

fs.readFile('index.ftl', 'utf8', (err, templateContent) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
    return
  }

  freemarker.render(templateContent, data, (err, result) => {
    if (err) {
      console.error('Error al renderizar la plantilla:', err)
      return
    }

    console.log(result)
  })
})
