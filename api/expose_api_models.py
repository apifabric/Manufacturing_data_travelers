from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.AdhesiveUsage, method_decorators= method_decorators)
    api.expose_object(database.models.DeviceAssembly, method_decorators= method_decorators)
    api.expose_object(database.models.Lot, method_decorators= method_decorators)
    api.expose_object(database.models.Defect, method_decorators= method_decorators)
    api.expose_object(database.models.Inspection, method_decorators= method_decorators)
    api.expose_object(database.models.Device, method_decorators= method_decorators)
    api.expose_object(database.models.Equipment, method_decorators= method_decorators)
    api.expose_object(database.models.Operator, method_decorators= method_decorators)
    api.expose_object(database.models.ManufacturingStep, method_decorators= method_decorators)
    api.expose_object(database.models.Packaging, method_decorators= method_decorators)
    api.expose_object(database.models.Rework, method_decorators= method_decorators)
    api.expose_object(database.models.Shipment, method_decorators= method_decorators)
    return api
