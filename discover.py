from pylogix import PLC

with PLC() as comm:  # No IP address needed for broadcasting
    devices = comm.Discover()
    for d in devices.Value:
        print(d.IPAddress, d.ProductName, d.Revision)
