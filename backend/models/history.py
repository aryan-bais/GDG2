from sqlalchemy import Column, Integer, String
from app.db import Base

class History(Base):
    __tablename__ = "history"

    id = Column(Integer, primary_key=True, index=True)
    symptoms = Column(String, nullable=False)
    result = Column(String, nullable=False)