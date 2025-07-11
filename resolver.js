import pool from './db.js'

const resolvers = {
  Mutation: {
    cancelOrder: async (_, { id }) => {
      const [result] = await pool.query('UPDATE orders SET status = ? WHERE id = ?', ['cancelled', id])

      if (result.affectedRows === 0) {
        throw new Error('Order not found or already cancelled.')
      }

      const [rows] = await pool.query('SELECT * FROM orders WHERE id = ?', [id])
      return rows[0]
    }
  }
}

export default resolvers