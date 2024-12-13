import sqlite3
import logging

# Set database file path relative to the Backend folder
DB_FILE = "./data.db"

# Logging setup
logger = logging.getLogger(__name__)

# Initialize the database
def init_db():
    try:
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS recordings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                filename TEXT NOT NULL,
                duration REAL NOT NULL,
                decibel_level REAL NOT NULL,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        """)
        conn.commit()
        conn.close()
        logger.debug("Database initialized successfully.")
    except Exception as e:
        logger.error(f"Database initialization failed: {str(e)}")
        raise RuntimeError(f"Failed to initialize the database: {str(e)}")

# Function to execute a query and return results
def query_db(query, params=()):
    try:
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        cursor.execute(query, params)
        rows = cursor.fetchall()
        conn.close()
        return rows
    except Exception as e:
        logger.error(f"Database query failed: {str(e)}")
        raise RuntimeError(f"Database query failed: {str(e)}")

# Function to insert data into the database
def insert_record(filename, duration, decibel_level):
    try:
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        cursor.execute(
            """
            INSERT INTO recordings (filename, duration, decibel_level)
            VALUES (?, ?, ?)
            """,
            (filename, duration, decibel_level),
        )
        conn.commit()
        conn.close()
    except Exception as e:
        logger.error(f"Database insertion failed: {str(e)}")
        raise RuntimeError(f"Database insertion failed: {str(e)}")

# Example usage of query_db function
def get_all_records():
    return query_db("SELECT * FROM recordings")

def clear_all_records():
    try:
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        cursor.execute("DELETE FROM recordings")
        conn.commit()
        conn.close()
    except Exception as e:
        logger.error(f"Failed to clear records: {str(e)}")
        raise RuntimeError(f"Failed to clear records: {str(e)}")
