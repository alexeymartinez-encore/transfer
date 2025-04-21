from pylogix import PLC

with PLC() as comm:  # No IP address needed for broadcasting
    devices = comm.Discover()
    for d in devices.Value:
        print(d.IPAddress, d.ProductName, d.Revision)


from fastapi import FastAPI
from pylogix import PLC

app = FastAPI()

@app.get("/plcs")
async def get_all_devices():
    with PLC() as comm:  # No IP address needed for broadcasting
        devices = comm.Discover()
        devices_list = []
        for d in devices.Value:
            devices_list.append(d)
    
    return devices_list
