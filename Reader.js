const fs = require('fs')
const util = require('util')
// util contém o método promisify que transforma funções sem retorno de promises em funções com retorno de promises

class Reader {

  constructor () {
    this.reader = util.promisify(fs.readFile)
  }

  async Read (filePath) {
    try {
      return await this.reader(filePath, 'utf-8')
    } catch (err) {
      return undefined
    }
  }
}

module.exports = Reader