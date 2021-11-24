package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
)

func main() {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins: []string{
			"*",
		},
		AllowMethods: []string{
			"GET",
		},
		AllowHeaders: []string{
			"Access-Control-Allow-Credentials",
        "Access-Control-Allow-Headers",
        "Content-Type",
        "Content-Length",
        "Accept-Encoding",
        "Authorization",
		},

	}))
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "# タイトル C# \n コード `バッククウォート",
		})
	})

	r.GET("/getIntroductionText", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "札",
		})
	})

	r.Run(":3000")
}