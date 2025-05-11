import pytest
from backend.services.nesting import validate_valves_capacity


def test_valves_below_limit():
    parts = [
        {"id": 1, "valves_required": 1},
        {"id": 2, "valves_required": 2},
    ]
    assert validate_valves_capacity(parts, max_valves=5) is True


def test_valves_equal_to_limit():
    parts = [
        {"id": 1, "valves_required": 2},
        {"id": 2, "valves_required": 3},
    ]
    assert validate_valves_capacity(parts, max_valves=5) is True


def test_valves_exceeding_limit():
    parts = [
        {"id": 1, "valves_required": 4},
        {"id": 2, "valves_required": 3},
    ]
    assert validate_valves_capacity(parts, max_valves=5) is False


def test_valves_default_fallback():
    # nessun campo valves_required → fallback a 1
    parts = [
        {"id": 1},
        {"id": 2},
        {"id": 3},
    ]
    assert validate_valves_capacity(parts, max_valves=3) is True
    assert validate_valves_capacity(parts, max_valves=2) is False
