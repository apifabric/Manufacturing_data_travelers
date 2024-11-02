# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

Base = declarative_base()

# Device Table: stores information about the devices being manufactured.
class Device(Base):
    """description: Stores information for each device being manufactured."""
    __tablename__ = 'device'

    id = Column(Integer, primary_key=True, autoincrement=True)
    serial_number = Column(String, nullable=False)
    model_name = Column(String, nullable=False)

# Equipment Table: stores details of equipment used during manufacturing.
class Equipment(Base):
    """description: Stores details of the equipment used during manufacturing."""
    __tablename__ = 'equipment'

    id = Column(Integer, primary_key=True, autoincrement=True)
    equipment_name = Column(String, nullable=False)
    equipment_id = Column(String, unique=True, nullable=False)

# Lot Table: contains lot information for consumables like adhesives.
class Lot(Base):
    """description: Contains lot information for adhesives used during manufacturing."""
    __tablename__ = 'lot'

    id = Column(Integer, primary_key=True, autoincrement=True)
    lot_number = Column(String, nullable=False, unique=True)
    expiration_date = Column(DateTime, nullable=False)

# Operator Table: stores data of operators involved in the manufacturing process.
class Operator(Base):
    """description: Stores information of operators involved in the manufacturing process."""
    __tablename__ = 'operator'

    id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    badge_number = Column(String, nullable=False, unique=True)

# ManufacturingStep Table: tracks different steps within the manufacturing process.
class ManufacturingStep(Base):
    """description: Tracks different steps involved in the manufacturing process."""
    __tablename__ = 'manufacturing_step'

    id = Column(Integer, primary_key=True, autoincrement=True)
    step_name = Column(String, nullable=False)
    step_order = Column(Integer, nullable=False)

# DeviceAssembly Table: associates devices with equipment and manufacturing steps.
class DeviceAssembly(Base):
    """description: Associates devices with equipment and steps for manufacturing."""
    __tablename__ = 'device_assembly'

    id = Column(Integer, primary_key=True, autoincrement=True)
    device_id = Column(Integer, ForeignKey('device.id'), nullable=False)
    equipment_id = Column(Integer, ForeignKey('equipment.id'), nullable=False)
    step_id = Column(Integer, ForeignKey('manufacturing_step.id'), nullable=False)
    operator_id = Column(Integer, ForeignKey('operator.id'), nullable=False)
    completed = Column(Boolean, default=False)

# AdhesiveUsage Table: logs usage of adhesives within device assemblies.
class AdhesiveUsage(Base):
    """description: Logs the usage of adhesives during device assemblies."""
    __tablename__ = 'adhesive_usage'

    id = Column(Integer, primary_key=True, autoincrement=True)
    device_assembly_id = Column(Integer, ForeignKey('device_assembly.id'), nullable=False)
    lot_id = Column(Integer, ForeignKey('lot.id'), nullable=False)
    quantity_used = Column(Integer, nullable=False)

# Inspection Table: records inspection results for completed assemblies.
class Inspection(Base):
    """description: Records inspection results for completed assemblies."""
    __tablename__ = 'inspection'

    id = Column(Integer, primary_key=True, autoincrement=True)
    device_id = Column(Integer, ForeignKey('device.id'), nullable=False)
    passed = Column(Boolean, nullable=False)
    inspection_date = Column(DateTime, default=datetime.utcnow)

# Defect Table: captures details of any defects found during inspections.
class Defect(Base):
    """description: Captures details of defects discovered during inspections."""
    __tablename__ = 'defect'

    id = Column(Integer, primary_key=True, autoincrement=True)
    inspection_id = Column(Integer, ForeignKey('inspection.id'), nullable=False)
    description = Column(String, nullable=False)
    severity = Column(String, nullable=False)

# Rework Table: logs instances where rework is needed due to defects.
class Rework(Base):
    """description: Logs rework instances when defects are found in inspections."""
    __tablename__ = 'rework'

    id = Column(Integer, primary_key=True, autoincrement=True)
    device_id = Column(Integer, ForeignKey('device.id'), nullable=False)
    operator_id = Column(Integer, ForeignKey('operator.id'), nullable=False)
    rework_date = Column(DateTime, default=datetime.utcnow)
    completed = Column(Boolean, default=False)

# Packaging Table: tracks packaging information for completed devices.
class Packaging(Base):
    """description: Tracks completed devices packaging information."""
    __tablename__ = 'packaging'

    id = Column(Integer, primary_key=True, autoincrement=True)
    device_id = Column(Integer, ForeignKey('device.id'), nullable=False)
    packaging_type = Column(String, nullable=False)
    packaging_date = Column(DateTime, default=datetime.utcnow)

# Shipment Table: logs shipment details after devices are packaged and ready to be shipped.
class Shipment(Base):
    """description: Logs shipment details for devices ready to be shipped."""
    __tablename__ = 'shipment'

    id = Column(Integer, primary_key=True, autoincrement=True)
    packaging_id = Column(Integer, ForeignKey('packaging.id'), nullable=False)
    destination = Column(String, nullable=False)
    shipment_date = Column(DateTime, default=datetime.utcnow)

engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# Populate initial data
devices = [
    Device(serial_number='SN001', model_name='ModelX'),
    Device(serial_number='SN002', model_name='ModelY')
]
session.add_all(devices)

equipment_list = [
    Equipment(equipment_name='Drill', equipment_id='EQ001'),
    Equipment(equipment_name='Welder', equipment_id='EQ002')
]
session.add_all(equipment_list)

lots = [
    Lot(lot_number='L001', expiration_date=datetime(2025, 5, 15)),
    Lot(lot_number='L002', expiration_date=datetime(2024, 11, 8))
]
session.add_all(lots)

operators = [
    Operator(first_name='John', last_name='Doe', badge_number='B001'),
    Operator(first_name='Jane', last_name='Smith', badge_number='B002')
]
session.add_all(operators)

manufacturing_steps = [
    ManufacturingStep(step_name='Assembly', step_order=1),
    ManufacturingStep(step_name='Testing', step_order=2)
]
session.add_all(manufacturing_steps)

device_assemblies = [
    DeviceAssembly(device_id=1, equipment_id=1, step_id=1, operator_id=1, completed=True),
    DeviceAssembly(device_id=2, equipment_id=2, step_id=2, operator_id=2, completed=False)
]
session.add_all(device_assemblies)

adhesive_usages = [
    AdhesiveUsage(device_assembly_id=1, lot_id=1, quantity_used=100)
]
session.add_all(adhesive_usages)

inspections = [
    Inspection(device_id=1, passed=True, inspection_date=datetime(2023, 10, 25))
]
session.add_all(inspections)

defects = [
    Defect(inspection_id=1, description='Scratch on surface', severity='Minor')
]
session.add_all(defects)

reworks = [
    Rework(device_id=2, operator_id=1, rework_date=datetime(2023, 9, 12), completed=False)
]
session.add_all(reworks)

packagings = [
    Packaging(device_id=1, packaging_type='Box', packaging_date=datetime(2023, 10, 26))
]
session.add_all(packagings)

shipments = [
    Shipment(packaging_id=1, destination='New York', shipment_date=datetime(2023, 10, 30))
]
session.add_all(shipments)

session.commit()
session.close()
