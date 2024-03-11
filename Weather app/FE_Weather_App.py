from fastapi import FastAPI, Query
from fastapi.responses import FileResponse

app = FastAPI()

@app.get("/")
async def get_index():
    return FileResponse("index.html")

@app.get("/weather")
async def get_weather(city: str = Query(...)):
    # Your weather fetching logic here
    return {"city": city, "temperature": 25, "humidity": 50, "description": "Sunny", "wind_speed": 10}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


#####
#pip install requests in cmd line


