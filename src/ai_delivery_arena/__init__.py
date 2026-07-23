"""AI Delivery Arena deterministic simulation engine."""

from .engine.fixtures import FixtureBundle, FixtureError, load_fixture_bundle
from .engine.gates import (
    GateAdjudication,
    GateEvaluation,
    GateEvaluationError,
    GateEvaluator,
)
from .engine.replay import GateMismatchError, ReplayEngine, ReplayError, ReplayResult

__all__ = [
    "FixtureBundle",
    "FixtureError",
    "GateAdjudication",
    "GateEvaluation",
    "GateEvaluationError",
    "GateEvaluator",
    "GateMismatchError",
    "ReplayEngine",
    "ReplayError",
    "ReplayResult",
    "load_fixture_bundle",
]

__version__ = "0.1.0"
