# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 02, 2024 19:31:54
# Database: sqlite:////tmp/tmp.D1ciHxlbCp/Manufacturing_data_travelers/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Device(SAFRSBaseX, Base):
    """
    description: Stores information for each device being manufactured.
    """
    __tablename__ = 'device'
    _s_collection_name = 'Device'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    serial_number = Column(String, nullable=False)
    model_name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    DeviceAssemblyList : Mapped[List["DeviceAssembly"]] = relationship(back_populates="device")
    InspectionList : Mapped[List["Inspection"]] = relationship(back_populates="device")
    PackagingList : Mapped[List["Packaging"]] = relationship(back_populates="device")
    ReworkList : Mapped[List["Rework"]] = relationship(back_populates="device")



class Equipment(SAFRSBaseX, Base):
    """
    description: Stores details of the equipment used during manufacturing.
    """
    __tablename__ = 'equipment'
    _s_collection_name = 'Equipment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    equipment_name = Column(String, nullable=False)
    equipment_id = Column(String, nullable=False, unique=True)

    # parent relationships (access parent)

    # child relationships (access children)
    DeviceAssemblyList : Mapped[List["DeviceAssembly"]] = relationship(back_populates="equipment")



class Lot(SAFRSBaseX, Base):
    """
    description: Contains lot information for adhesives used during manufacturing.
    """
    __tablename__ = 'lot'
    _s_collection_name = 'Lot'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    lot_number = Column(String, nullable=False, unique=True)
    expiration_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    AdhesiveUsageList : Mapped[List["AdhesiveUsage"]] = relationship(back_populates="lot")



class ManufacturingStep(SAFRSBaseX, Base):
    """
    description: Tracks different steps involved in the manufacturing process.
    """
    __tablename__ = 'manufacturing_step'
    _s_collection_name = 'ManufacturingStep'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    step_name = Column(String, nullable=False)
    step_order = Column(Integer, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    DeviceAssemblyList : Mapped[List["DeviceAssembly"]] = relationship(back_populates="step")



class Operator(SAFRSBaseX, Base):
    """
    description: Stores information of operators involved in the manufacturing process.
    """
    __tablename__ = 'operator'
    _s_collection_name = 'Operator'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    badge_number = Column(String, nullable=False, unique=True)

    # parent relationships (access parent)

    # child relationships (access children)
    DeviceAssemblyList : Mapped[List["DeviceAssembly"]] = relationship(back_populates="operator")
    ReworkList : Mapped[List["Rework"]] = relationship(back_populates="operator")



class DeviceAssembly(SAFRSBaseX, Base):
    """
    description: Associates devices with equipment and steps for manufacturing.
    """
    __tablename__ = 'device_assembly'
    _s_collection_name = 'DeviceAssembly'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    device_id = Column(ForeignKey('device.id'), nullable=False)
    equipment_id = Column(ForeignKey('equipment.id'), nullable=False)
    step_id = Column(ForeignKey('manufacturing_step.id'), nullable=False)
    operator_id = Column(ForeignKey('operator.id'), nullable=False)
    completed = Column(Boolean)

    # parent relationships (access parent)
    device : Mapped["Device"] = relationship(back_populates=("DeviceAssemblyList"))
    equipment : Mapped["Equipment"] = relationship(back_populates=("DeviceAssemblyList"))
    operator : Mapped["Operator"] = relationship(back_populates=("DeviceAssemblyList"))
    step : Mapped["ManufacturingStep"] = relationship(back_populates=("DeviceAssemblyList"))

    # child relationships (access children)
    AdhesiveUsageList : Mapped[List["AdhesiveUsage"]] = relationship(back_populates="device_assembly")



class Inspection(SAFRSBaseX, Base):
    """
    description: Records inspection results for completed assemblies.
    """
    __tablename__ = 'inspection'
    _s_collection_name = 'Inspection'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    device_id = Column(ForeignKey('device.id'), nullable=False)
    passed = Column(Boolean, nullable=False)
    inspection_date = Column(DateTime)

    # parent relationships (access parent)
    device : Mapped["Device"] = relationship(back_populates=("InspectionList"))

    # child relationships (access children)
    DefectList : Mapped[List["Defect"]] = relationship(back_populates="inspection")



class Packaging(SAFRSBaseX, Base):
    """
    description: Tracks completed devices packaging information.
    """
    __tablename__ = 'packaging'
    _s_collection_name = 'Packaging'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    device_id = Column(ForeignKey('device.id'), nullable=False)
    packaging_type = Column(String, nullable=False)
    packaging_date = Column(DateTime)

    # parent relationships (access parent)
    device : Mapped["Device"] = relationship(back_populates=("PackagingList"))

    # child relationships (access children)
    ShipmentList : Mapped[List["Shipment"]] = relationship(back_populates="packaging")



class Rework(SAFRSBaseX, Base):
    """
    description: Logs rework instances when defects are found in inspections.
    """
    __tablename__ = 'rework'
    _s_collection_name = 'Rework'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    device_id = Column(ForeignKey('device.id'), nullable=False)
    operator_id = Column(ForeignKey('operator.id'), nullable=False)
    rework_date = Column(DateTime)
    completed = Column(Boolean)

    # parent relationships (access parent)
    device : Mapped["Device"] = relationship(back_populates=("ReworkList"))
    operator : Mapped["Operator"] = relationship(back_populates=("ReworkList"))

    # child relationships (access children)



class AdhesiveUsage(SAFRSBaseX, Base):
    """
    description: Logs the usage of adhesives during device assemblies.
    """
    __tablename__ = 'adhesive_usage'
    _s_collection_name = 'AdhesiveUsage'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    device_assembly_id = Column(ForeignKey('device_assembly.id'), nullable=False)
    lot_id = Column(ForeignKey('lot.id'), nullable=False)
    quantity_used = Column(Integer, nullable=False)

    # parent relationships (access parent)
    device_assembly : Mapped["DeviceAssembly"] = relationship(back_populates=("AdhesiveUsageList"))
    lot : Mapped["Lot"] = relationship(back_populates=("AdhesiveUsageList"))

    # child relationships (access children)



class Defect(SAFRSBaseX, Base):
    """
    description: Captures details of defects discovered during inspections.
    """
    __tablename__ = 'defect'
    _s_collection_name = 'Defect'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    inspection_id = Column(ForeignKey('inspection.id'), nullable=False)
    description = Column(String, nullable=False)
    severity = Column(String, nullable=False)

    # parent relationships (access parent)
    inspection : Mapped["Inspection"] = relationship(back_populates=("DefectList"))

    # child relationships (access children)



class Shipment(SAFRSBaseX, Base):
    """
    description: Logs shipment details for devices ready to be shipped.
    """
    __tablename__ = 'shipment'
    _s_collection_name = 'Shipment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    packaging_id = Column(ForeignKey('packaging.id'), nullable=False)
    destination = Column(String, nullable=False)
    shipment_date = Column(DateTime)

    # parent relationships (access parent)
    packaging : Mapped["Packaging"] = relationship(back_populates=("ShipmentList"))

    # child relationships (access children)
