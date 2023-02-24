class Processor {
  static Process(data) {
    let dados = data.split('\r\n')
    let rows = []

    dados.forEach(row => {
      rows.push(row.split(','))
    });

    return rows
  }
}

module.exports = Processor  