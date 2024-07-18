module.exports = {
    apps : [{
      name   : "app1",
      script : "./index.js",
      env: {
      NODE_ENV: "production",
      PORT: 80,
      DATABASE_URL: "postgresql://postgres.zymxxghqiozdhdhjljvu:rK6PXbsPs4oSXEtT@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres",
      SECRET_KEY: "PasswordJwt"
  }
    }]
  }
  