const { getAll, create, getById, updateById, deleteById } = require('./cacaosController')
const Product = require('../models/cacaosModel')

jest.mock('../models/cacaosModel')

describe('cacaoController', () => {
  describe('Given a getAll function ', () => {
    describe('When it invoked ', () => {
      let req
      let res
      describe('and when there is no error', () => {
        beforeEach(async () => {
          req = {
            query: null
          }
          res = {
            json: jest.fn()
          }
          await getAll(req, res)
        })
        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled()
        })
        test('Then call Product.find', () => {
          expect(Product.find).toHaveBeenCalled()
        })
      })

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            query: null
          }
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()

          }
          Product.find.mockRejectedValueOnce('find error')
          await getAll(req, res)
        })

        test('Then call res.json once', () => {
          expect(res.status).toHaveBeenCalledWith(500)
        })
        test('Then call res.json once', () => {
          expect(res.send).toHaveBeenCalledWith('find error')
        })
      })
    })
  })
  describe('Given a create function ', () => {
    describe('When it invoked ', () => {
      let req
      let res
      describe('and when there is no error', () => {
        beforeEach(async () => {
          req = {
            query: null
          }
          res = {
            json: jest.fn()
          }
          await create(req, res)
        })
        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled()
        })
        test('Then call Product.create', () => {
          expect(Product.create).toHaveBeenCalled()
        })
      })

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            body: null
          }
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          }
          Product.create.mockRejectedValueOnce('create error')
          await create(req, res)
        })

        test('Then call res.status once', () => {
          expect(res.status).toHaveBeenCalledWith(500)
        })
        test('Then call res.send once', () => {
          expect(res.send).toHaveBeenCalledWith('create error')
        })
      })
    })
  })
  describe('Given a getById function ', () => {
    describe('When it invoked ', () => {
      let req
      let res
      describe('and when there is no error', () => {
        beforeEach(async () => {
          req = {
            params: {}
          }
          res = {
            json: jest.fn()
          }
          await getById(req, res)
        })
        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled()
        })
        test('Then call Product.findById', () => {
          expect(Product.findById).toHaveBeenCalled()
        })
      })

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: {}
          }
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          }
          Product.findById.mockRejectedValueOnce('create error')
          await getById(req, res)
        })

        test('Then call res.status once', () => {
          expect(res.status).toHaveBeenCalledWith(500)
        })
        test('Then call res.send once', () => {
          expect(res.send).toHaveBeenCalledWith('create error')
        })
      })
    })
  })
  describe('Given a updateById function ', () => {
    describe('When it invoked ', () => {
      let req
      let res
      describe('and when there is no error', () => {
        beforeEach(async () => {
          req = {
            params: {}
          }
          res = {
            json: jest.fn()
          }
          await updateById(req, res)
        })
        test('Then call res.json once', () => {
          expect(res.json).toHaveBeenCalled()
        })
        test('Then call Product.findById', () => {
          expect(Product.findByIdAndUpdate).toHaveBeenCalled()
        })
      })

      describe('And there is an error', () => {
        beforeEach(async () => {
          req = {
            params: {}
          }
          res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn()
          }
          Product.findByIdAndUpdate.mockRejectedValueOnce('create error')
          await updateById(req, res)
        })

        test('Then call res.status once', () => {
          expect(res.status).toHaveBeenCalledWith(500)
        })
        test('Then call res.send once', () => {
          expect(res.send).toHaveBeenCalledWith('create error')
        })
      })
    })
  })
  describe('Given a deleteById function ', () => {
    describe('When it invoked ', () => {
      let req
      let res
      describe('and when there is no error', () => {
        beforeEach(async () => {
          req = {
            params: {}
          }
          res = {
            json: jest.fn(),
            status: jest.fn()
          }
          await deleteById(req, res)
        })
        test('Then call res.status once', () => {
          expect(res.status).toHaveBeenCalledWith(204)
        })
        test('Then call Product.findById', () => {
          expect(Product.findByIdAndDelete).toHaveBeenCalled()
        })
      })
    })
  })
})
