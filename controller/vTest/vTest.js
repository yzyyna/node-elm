class VTest {
  constructor() {}
  async first(req, res, next) {
    console.log("first", req.query);
    try {
      const result = {
        code: 200,
        data: [
          {
            a: 1,
            b: 2,
          },
        ],
      };
      res.send(result);
    } catch (err) {
      console.log("获取数据失败");
      res.send({
        status: 0,
        type: "ERROR_DATA",
        message: "获取数据失败",
      });
    }
  }
}
export default new VTest();
