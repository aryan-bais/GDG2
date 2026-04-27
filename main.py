from fastapi import FastAPI, WebSocket, WebSocketDisconnect

app = FastAPI()

connections = []

@app.websocket("/track")
async def track(websocket: WebSocket):
    await websocket.accept()
    connections.append(websocket)

    try:
        while True:
            data = await websocket.receive_text()
            
            # broadcast to all
            for conn in connections:
                await conn.send_text(data)

    except WebSocketDisconnect:
        connections.remove(websocket)
        print("Client disconnected")