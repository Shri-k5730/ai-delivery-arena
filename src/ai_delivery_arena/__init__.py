"""AI Delivery Arena deterministic simulation engine."""

from .engine.fixtures import FixtureBundle, FixtureError, load_fixture_bundle
from .engine.gates import (
    GateAdjudication,
    GateEvaluation,
    GateEvaluationError,
    GateEvaluator,
)
from .engine.models import RunInput, RunStatus
from .engine.persistence import (
    CompletedRunError,
    JsonRunStore,
    NonAppendOnlyUpdateError,
    PersistenceError,
    RestoredRun,
    RevisionConflictError,
    RunNotFoundError,
    SaveCompatibilityError,
    SaveIntegrityError,
)
from .engine.replay import (
    GateMismatchError,
    ReplayEngine,
    ReplayError,
    ReplayResult,
    RunCompletionError,
)

__all__ = [
    "CompletedRunError",
    "FixtureBundle",
    "FixtureError",
    "GateAdjudication",
    "GateEvaluation",
    "GateEvaluationError",
    "GateEvaluator",
    "GateMismatchError",
    "JsonRunStore",
    "NonAppendOnlyUpdateError",
    "PersistenceError",
    "ReplayEngine",
    "ReplayError",
    "ReplayResult",
    "RestoredRun",
    "RevisionConflictError",
    "RunCompletionError",
    "RunInput",
    "RunNotFoundError",
    "RunStatus",
    "SaveCompatibilityError",
    "SaveIntegrityError",
    "load_fixture_bundle",
]

__version__ = "0.6.0"
